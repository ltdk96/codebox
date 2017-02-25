#!/bin/bash
set -e

to=$1
shift

cont=$(docker run -d --net=none --memory=64M --memory-swap=64M --memory-swappiness=0 --kernel-memory=16M --cpu-quota=25000 --cpuset-cpus="0" "$@")
code=$(timeout "$to" docker wait "$cont" || true)
docker stop $cont &> /dev/null
echo -n 'status: '
if [ -z "$code" ]; then
    echo timeout
else
    echo exited: $code
fi

echo output:
# pipe to sed simply for pretty nice indentation
docker logs $cont | sed 's/^/\t/'

docker rm $cont &> /dev/null
