package com.example.servicepc.users;

public class UsersNotFoundException extends Throwable{
    public UsersNotFoundException(String message){
        super(message);
    }
}
