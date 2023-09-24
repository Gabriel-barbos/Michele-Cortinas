package com.pi.projetointegrador.services;

import com.pi.projetointegrador.models.User;
import com.pi.projetointegrador.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findById(Long id){
        Optional<User> user = this.userRepository.findById(id);
        return user.orElseThrow(()-> new RuntimeException(
                "Usuário não encontrado!"
        ));
    }

    @Transactional
    public User create (User obj){
        obj.setId(null);
        obj = this.userRepository.save(obj);
        return obj;
    }

    @Transactional
    public User update(User obj){
        User newObj = findById(obj.getId());
        newObj.setSenha(obj.getSenha());
        newObj.setTelefone(obj.getTelefone());
        return this.userRepository.save(newObj);
    }

    public void delete(Long id){
        findById(id);
        //* Verificação para entidades relacionadas (Customizações de cortinas)
        try{
            this.userRepository.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException("Não foi possível excluir");
        }
    }



}
