package io.agileintelligence.ppmtool.services;


import io.agileintelligence.ppmtool.domain.User;
import io.agileintelligence.ppmtool.exceptions.UsernameAlreadyExistsException;
import io.agileintelligence.ppmtool.repositories.UserRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    static Logger log=Logger.getLogger(UserService.class.getName());

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;




    public User saveUser (User newUser){

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            log.info("this does work");
            log.error("not found");
            log.debug("ARIZONA we have a problem");
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);




        }catch (Exception e){

            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");


        }

    }



}
