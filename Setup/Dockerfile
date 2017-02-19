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

RUN apt-get install -y bc
