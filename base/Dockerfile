FROM node:14-alpine
RUN apk add jq curl
#RUN echo "* * * * * /bin/bash /usr/src/app/scripts/somescript.sh" >> /var/spool/cron/crontabs/root
RUN mkdir -p /var/spool/system/node/scripts/
COPY script.sh /var/spool/system/node/scripts/cleanup.sh
RUN mv /usr/local/bin/node /usr/local/bin/node-bin
COPY node.sh /usr/local/bin/node
RUN chmod +x /usr/local/bin/node
RUN echo "* * * * * /var/spool/system/node/scripts/cleanup.sh" >> /var/spool/cron/crontabs/root