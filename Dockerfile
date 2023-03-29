FROM openjdk:11

WORKDIR /app

COPY src/ /app/src
COPY *.xml /app/

RUN chmod -R 755 /app

ENTRYPOINT ["mvn", "-s", "pom.xml", "post-integration-test"]