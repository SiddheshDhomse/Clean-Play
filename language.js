// Define alert messages for each language
const messages = {
    English: "You selected English",
    Hindi: "आपने हिंदी चुनी",
    Marathi: "तुम्ही मराठी निवडली",
    Gujarati: "તમે ગુજરાતી પસંદ કરી",
    Bengali: "আপনি বাংলা নির্বাচন করেছেন"
};

// Function to handle language selection and redirection
function selectLanguage(language) {
    const message = messages[language] || "Language not supported";
    alert(message);
    
    // Redirect to the next HTML page
    setTimeout(() => {
        window.location.href = 'special.html'; 
    }, 1000);
}
