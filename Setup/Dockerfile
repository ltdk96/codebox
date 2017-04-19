############################################################
# Dockerfile to build sandbox for executing user code
# Based on Ubuntu
############################################################

FROM ioft/i386-ubuntu:xenial
MAINTAINER LE TA DANG KHOA

# Debian complains about the terminal environment on Docker. Use this.
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base packages
RUN apt-get install -y software-properties-common

# Install Ruby
RUN add-apt-repository -y ppa:brightbox/ruby-ng
RUN apt-get update
RUN apt-get install -y ruby2.3

# Install Python
RUN add-apt-repository -y ppa:jonathonf/python-3.6
RUN apt-get update
RUN apt-get install -y python3.6

# Install Java
RUN add-apt-repository -y ppa:webupd8team/java
RUN apt-get update
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get install -y oracle-java8-installer

RUN apt-get install -y bc

# Add non-root user
RUN useradd -ms /bin/bash learner
USER learner
