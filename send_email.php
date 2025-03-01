<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données envoyées
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Vérifier si les données sont présentes
    if (!empty($name) && !empty($email) && !empty($message)) {
        // L'adresse email où l'email sera envoyé
        $to = "pauline.yvelin@mmibordeaux.com";

        // Sujet de l'email
        $subject = "Nouveau message de contact";

        // Corps de l'email
        $body = "Nom: $name\nEmail: $email\nMessage: $message";

        // En-têtes de l'email
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Envoyer l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message envoyé avec succès.";
        } else {
            echo "Erreur lors de l'envoi du message.";
        }
    } else {
        echo "Tous les champs doivent être remplis.";
    }
}
?>
