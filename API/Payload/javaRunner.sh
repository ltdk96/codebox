# 1. Get targeted-file's fullname
fullpath=$1
IFS='/' read -r -a fullpath_array <<< "$fullpath"
fullname=${fullpath_array[-1]}

# 2. Build the targeted-file's classname
IFS='.' read -r -a fullname_array <<< "$fullname"
fullpath_array[-1]=${fullname_array[0]}
classname=$(IFS=. ; echo "${fullpath_array[*]}")

# 3. Go to usercode and run compiled java-file
cd /usercode
java $classname
