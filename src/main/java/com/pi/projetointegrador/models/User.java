package com.pi.projetointegrador.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Objects;

@Entity
@Table(name = User.TABLE_NAME)

public class User {
    public static final String TABLE_NAME = "user";


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //* Auto increment mysql
    @Column(name = "id", unique = true)
    @NotBlank //* Veririca notempty e notnull
    private Long id;

    @Column(name = "nome", length = 50, nullable = false)
    @NotBlank
    private String nome;

    @Column(name = "email", length = 100, nullable = false,unique = true)
    @NotBlank
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) //* valdação
    @Column(name = "senha", length = 50, nullable = false)
    @NotBlank
    @Size(min = 2, max = 30)
    private String senha;

    public User() {
    }

    public User(Long id, String nome, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        User user = (User) obj;
        return Objects.equals(id, user.id) && Objects.equals(nome, user.nome) && Objects.equals(email, user.email) && Objects.equals(senha, user.senha);
    }

    @Override
    public int hashCode(){
        final int random = 31;
        int result = 1;
        result = random * result + (this.id == null ? 0 : this.id.hashCode());
        return result;
    }

}
