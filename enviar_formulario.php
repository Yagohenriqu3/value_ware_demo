<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar os dados do formulário
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $empresa = $_POST['empresa'];
    $cargo = $_POST['cargo'];
    $mensagem = $_POST['mensagem'];

    // Configurar o email de destino
    $destinatario = "contato@valueware.com.br"; // Insira o endereço de email para onde deseja enviar os dados

    // Construir o corpo do email
    $assunto = "Nova mensagem do formulário de contato";
    $corpo_email = "Nome: $name\n";
    $corpo_email .= "Telefone: $tel\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Empresa: $empresa\n";
    $corpo_email .= "Cargo: $cargo\n";
    $corpo_email .= "Mensagem: $mensagem";

    // Enviar o email
    if (mail($destinatario, $assunto, $corpo_email)) {
        // Redirecionar de volta para a página do formulário ou para uma página de confirmação
        header('Location: formulario.html');
        exit();
    } else {
        echo "Erro ao enviar o email.";
    }
}
