package com.gemini11.buildupbackend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gemini11.buildupbackend.entity.LoginTokenDTO;
import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.model.ShippingAddress;
import com.gemini11.buildupbackend.service.AccountService;
import com.gemini11.buildupbackend.service.ShippingAddressService;
import com.gemini11.buildupbackend.utility.JwtHelper;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class ShippingAddressControllerTest {
    @Mock
    ShippingAddressService shippingAddressService;

    @Mock
    AccountService accountServiceMock;

    @Autowired
    AccountService accountService1;

    @Autowired
    private MockMvc mockMvc;

    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    @Nested
    class testGetShippingAddressByToken{


        @BeforeAll
        public void setup(){

        }

        @Test
        public void testGivenTokenWithNullUsername() throws Exception {
            LoginTokenDTO tokenDTO = new LoginTokenDTO(new JwtHelper().generateToken(null));
            ObjectMapper objectMapper = new ObjectMapper();

            mockMvc.perform(MockMvcRequestBuilders.post("/api/shippingAddress/findShippingAddressByToken")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(tokenDTO)))
                    .andExpect(MockMvcResultMatchers.status().isBadRequest())
                    .andReturn();
        }

        @Test
        public void testGivenAccountEmpty() throws Exception {
            LoginTokenDTO tokenDTO = new LoginTokenDTO(new JwtHelper().generateToken("mon123"));
            ObjectMapper objectMapper = new ObjectMapper();

            when(accountServiceMock.getAccountByUsername("mon123")).thenReturn(Optional.empty());

            mockMvc.perform(MockMvcRequestBuilders.post("/api/shippingAddress/findShippingAddressByToken")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(tokenDTO)))
                    .andExpect(MockMvcResultMatchers.status().isBadRequest())
                    .andReturn();
        }

        @Transactional
        @Test
        public void testGivenAccountHasEmptyShippingAddress() throws Exception {
            LoginTokenDTO tokenDTO = new LoginTokenDTO(new JwtHelper().generateToken("mon123"));
            ObjectMapper objectMapper = new ObjectMapper();

            Account account = accountService1.createAccount( new Account("mon123", "password"));
            Iterable<ShippingAddress> addresses = Collections.emptyList();


            when(accountServiceMock.getAccountByUsername(account.getUsername())).thenReturn(Optional.of(account));

            when(shippingAddressService.getShippingAddressesByAccountId(account.getAccountId())).thenReturn(addresses);

            mockMvc.perform(MockMvcRequestBuilders.post("/api/shippingAddress/findShippingAddressByToken")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(tokenDTO)))
                    .andExpect(MockMvcResultMatchers.status().isOk())
                    .andReturn();

            accountService1.deleteAccountByUsername(account.getUsername());

        }

        @Transactional
        @Test
        public void testGivenAccountHasShippingAddress() throws Exception {
            LoginTokenDTO tokenDTO = new LoginTokenDTO(new JwtHelper().generateToken("mon123"));
            ObjectMapper objectMapper = new ObjectMapper();
            Account account = accountService1.createAccount( new Account("mon123", "password"));
            List<ShippingAddress> addresses = new java.util.ArrayList<>(Collections.emptyList());
            addresses.add(new ShippingAddress());
            addresses.add(new ShippingAddress());

            when(accountServiceMock.getAccountByUsername(account.getUsername())).thenReturn(Optional.of(account));

            when(shippingAddressService.getShippingAddressesByAccountId(account.getAccountId())).thenReturn(addresses);

            mockMvc.perform(MockMvcRequestBuilders.post("/api/shippingAddress/findShippingAddressByToken")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(tokenDTO)))
                    .andExpect(MockMvcResultMatchers.status().isOk())
                    .andReturn();

            accountService1.deleteAccountByUsername(account.getUsername());

        }


        @AfterAll
        public void teardown(){
            Mockito.reset(accountServiceMock);
        }

    }

}
