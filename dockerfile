FROM node:16.14.2

ARG SOURCE_CODE

# location of source code
ENV PROJECT_ROOT /opt/app
RUN mkdir -p $PROJECT_ROOT
WORKDIR $PROJECT_ROOT

# copy all to container
COPY ./${SOURCE_CODE} .

# install packages
RUN yarn install

# build service
RUN yarn build 