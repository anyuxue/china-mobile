FROM harbor01.cmcc.com/jt-ecloud-test/tomcat:v8.5
MAINTAINER xuhuiqun "xuhuiqun@chinamobile.com"


ENV BASE_DIR="/usr/local/tomcat" 

WORKDIR /$BASE_DIR

ADD dist/ webapps/ROOT/

ENTRYPOINT ["/usr/local/tomcat/bin/catalina.sh","run"]
