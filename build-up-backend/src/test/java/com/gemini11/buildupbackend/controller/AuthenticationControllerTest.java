package com.gemini11.buildupbackend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gemini11.buildupbackend.entity.AuthRequestBody;
import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.service.AccountService;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
public class AuthenticationControllerTest {

    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    @Nested
    public class RegisterTest {

        @Mock
        AccountService accountService;

        @Mock
        BCryptPasswordEncoder bCryptPasswordEncoder;

        @InjectMocks
        AuthenticationController authenticationController;

        private MockMvc mockMvc;

        private ObjectMapper objectMapper;

        @BeforeEach
        public void setupForEach() {
            this.mockMvc = MockMvcBuilders.standaloneSetup(authenticationController).build();
            this.objectMapper = new ObjectMapper();
        }

        @AfterEach
        public void teardownForEach() {
            Mockito.reset(accountService);
        }

        @Test
        public void testGetAccountByUsernameThrowException() throws Exception {
            when(accountService.getAccountByUsername(any())).thenThrow(RuntimeException.class);

            AuthRequestBody authRequestBody = new AuthRequestBody("anyUsername", "anyPassword");
            mockMvc.perform(post("/api/register")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(authRequestBody))
                    )
                    .andExpect(status().isInternalServerError());
        }

        @Test
        public void testIsDuplicateVariableEqualToTrue() throws Exception {
            String sameUsername = "anySameUsername";
            when(accountService.getAccountByUsername(sameUsername)).thenReturn(Optional.of(new Account()));

            AuthRequestBody authRequestBody = new AuthRequestBody(sameUsername, "anyPassword");
            mockMvc.perform(post("/api/register")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(authRequestBody))
                    )
                    .andExpect(status().isBadRequest());
        }

        @Test
        public void testCreateAccountThrowException() throws Exception {
            when(accountService.createAccount(any())).thenThrow(RuntimeException.class);

            AuthRequestBody authRequestBody = new AuthRequestBody("anyUsername", "anyPassword");
            mockMvc.perform(post("/api/register")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(authRequestBody))
                    )
                    .andExpect(status().isInternalServerError());
        }

        @Test
        public void testCreateAccountSuccess() throws Exception {
            AuthRequestBody authRequestBody = new AuthRequestBody("anyUsername", "anyPassword");
            mockMvc.perform(post("/api/register")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(authRequestBody))
                    )
                    .andExpect(status().isCreated());
        }
    }
}
