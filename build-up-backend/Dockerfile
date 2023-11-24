FROM gradle:8.4.0-jdk17-alpine AS build

WORKDIR /app

COPY build.gradle gradlew gradlew.bat settings.gradle ./
COPY src ./src

RUN gradle build --no-daemon

FROM openjdk:17 AS serve

WORKDIR /app

ENV JAR_BUILD_FILE build-up-backend-0.0.1-SNAPSHOT.jar

COPY --from=build ./app/build/libs/${JAR_BUILD_FILE} ./app.jar
COPY ./src/main/resources/data.sql ./data.sql

EXPOSE 8080

CMD java -jar app.jar
