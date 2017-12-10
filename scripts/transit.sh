#!/bin/bash
if [ ! $# -eq 2 ]  
then  
    echo 'Please input host list and path as parameters.'
    exit 1
fi

host_string=$1
vps_path=$2
array=(${host_string//,/ })
user="work"

script_path=$(cd `dirname $0` && pwd)
platform_name="mip-platform"

# push code to vps
function pushCode()
{   
    cd ../
    tar_name=$platform_name'.'`date '+%Y-%m-%d-%H-%M'`'.tar'
    tar -czf $tar_name ./$platform_name
    echo $tar_name'打包完成.'
    echo "Host list : "${array[@]}

    for var in "${array[@]}"
    do
        #scp './'$tar_name $user'@'$var':'$vps_path
        echo "Scp to "$var" successfully."
    done
}

pushCode
