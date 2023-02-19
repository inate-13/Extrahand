 FROM openjdk:11
 WORKDIR usr/lib
 EXPOSE 7008
 ADD ./target/vendor-suggestion-service-0.0.1-SNAPSHOT.jar /usr/lib/vendor-suggestion-service-0.0.1-SNAPSHOT.jar
 ENTRYPOINT ["java","-jar", "vendor-suggestion-service-0.0.1-SNAPSHOT.jar"]
