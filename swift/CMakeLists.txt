cmake_minimum_required(VERSION 3.24)
project(obj_c)

set(CMAKE_CXX_STANDARD 17)

add_executable(obj_c main.cpp OpenAPIClient/Classes/OpenAPIs/Extensions.swift)
