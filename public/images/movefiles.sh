#!/bin/bash

# Check if at least 2 arguments are provided (array of files and destination folder)
if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <destination_folder> <file1> <file2> ... <fileN>"
  exit 1
fi

# The first argument is the destination folder
destination_folder=$1

# Check if the destination folder exists
if [ ! -d "$destination_folder" ]; then
  echo "Error: Destination folder '$destination_folder' does not exist."
  exit 1
fi

# Loop through the remaining arguments (the list of files)
for file in "${@:2}"; do
  # Check if the file exists
  if [ -e "$file" ]; then
    echo "Moving '$file' to '$destination_folder'..."
    mv "$file" "$destination_folder"
  else
    echo "Warning: File '$file' does not exist. Skipping."
  fi
done

echo "Operation completed."
