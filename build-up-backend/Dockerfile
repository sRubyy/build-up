FROM openjdk:17 AS build

WORKDIR /app

ENV JAR_BUILD_FILE build-up-backend-0.0.1-SNAPSHOT.jar

COPY ./src/main/resources/docker-application.properties ./application.properties
COPY ./build/libs/${JAR_BUILD_FILE} ./app.jar

EXPOSE 8080

CMD java -jar -Dspring.config.location=$SPRING_CONFIG_LOCATION app.jar
