// Hospital Website JavaScript

// Language translations
const translations = {
  en: {
    'hospital-name': 'Gajanan Hospital And Baal Rugnalay, Phulambri',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-doctors': 'Doctors',
    'nav-services': 'Services',
    'nav-facilities': 'Facilities',
    'nav-contact': 'Contact',
    'nav-appointment': 'Appointment',
    'hero-title': 'Excellence in Healthcare',
    'hero-subtitle': 'Providing compassionate and comprehensive medical care for you and your family',
    'book-appointment': 'Book Appointment',
    'our-services': 'Our Services',
    'years-experience': 'Years Experience',
    'expert-doctors': 'Expert Doctors',
    'emergency-care': 'Emergency Care',
    'happy-patients': 'Happy Patients',
    'about-title': 'About Our Hospital',
    'about-subtitle': 'Committed to providing world-class healthcare services',
    'our-mission': 'Our Mission',
    'mission-text': 'To provide exceptional healthcare services with compassion, innovation, and excellence, ensuring the well-being of our community through comprehensive medical care and preventive health programs.',
    'our-vision': 'Our Vision',
    'vision-text': 'To be recognized as a leading hospitals, known for our commitment to patient care, medical excellence, and innovative treatment approaches.',
    'compassionate-care': 'Compassionate Care',
    'expert-team': 'Expert Medical Team',
    '24-7-service': '24/7 Emergency Services',
    'meet-doctors': 'Meet Our Doctors',
    'doctors-subtitle': 'Experienced healthcare professionals dedicated to your well-being',
    'general-medicine': 'General Medicine & Internal Medicine',
    'years-exp': 'years experience',
    'expertise': 'Expertise:',
    'diabetes-mgmt': 'Diabetes management',
    'hypertension': 'Hypertension',
    'cardiac-care': 'Cardiac care',
    'respiratory-diseases': 'Respiratory diseases',
    'mon-sat': 'Mon-Sat 9:00 AM - 6:00 PM',
    'gynecology-obstetrics': 'Gynecology & Obstetrics',
    'high-risk-pregnancy': 'High-risk pregnancy',
    'normal-delivery': 'Normal delivery',
    'gynecological-surgeries': 'Gynecological surgeries',
    'womens-health': "Women's health",
    'mon-fri-sat': 'Mon-Fri 10:00 AM - 5:00 PM, Sat 10:00 AM - 2:00 PM',
    'services-subtitle': 'Comprehensive healthcare solutions for all your medical needs',
    'comprehensive-checkups': 'Comprehensive health check-ups',
    'diabetes-hypertension-mgmt': 'Diabetes and hypertension management',
    'cardiac-monitoring': 'Cardiac care and monitoring',
    'respiratory-treatment': 'Respiratory disease treatment',
    'preventive-healthcare': 'Preventive healthcare',
    'health-counseling': 'Health counseling',
    'antenatal-care': 'Antenatal care and pregnancy monitoring',
    'normal-cesarean-deliveries': 'Normal and cesarean deliveries',
    'high-risk-pregnancy-mgmt': 'High-risk pregnancy management',
    'gynecological-consultations': 'Gynecological consultations',
    'womens-health-screening': "Women's health screening",
    'family-planning': 'Family planning services',
    'reproductive-health': 'Reproductive health',
    'our-facilities': 'Our Facilities',
    'facilities-subtitle': 'State-of-the-art medical facilities and equipment',
    'modern-operation-theaters': 'Modern Operation Theaters',
    'advanced-surgical-facilities': 'Advanced surgical facilities with latest technology',
    'modern-infrastructure': 'Modern Infrastructure',
    'contemporary-building-design': 'Contemporary building design with patient comfort in mind',
    'advanced-diagnostic-equipment': 'Advanced diagnostic equipment',
    '24-7-emergency-services': '24/7 emergency services',
    'beds-equipments-support': 'Beds with essesntial equipments support',
    'labor-delivery-rooms': 'Labor and delivery rooms',
    'modern-patient-rooms': 'Patient rooms with modern amenities',
    'pharmacy-premises': 'Pharmacy on premises',
    'ambulance-services': 'Ambulance services',
    'digital-health-records': 'Digital health records',
    'contact-us': 'Contact Us',
    'contact-subtitle': 'Get in touch with us for any medical assistance',
    'address': 'Address',
    'phone': 'Phone',
    'emergency': 'Emergency',
    'email': 'Email',
    'appointment-subtitle': 'Schedule your visit with our expert doctors',
    'patient-name': 'Patient Name',
    'age': 'Age',
    'gender': 'Gender',
    'select-gender': 'Select Gender',
    'male': 'Male',
    'female': 'Female',
    'other': 'Other',
    'contact-number': 'Contact Number',
    'preferred-doctor': 'Preferred Doctor',
    'select-doctor': 'Select Doctor',
    'department': 'Department',
    'select-department': 'Select Department',
    'preferred-date': 'Preferred Date',
    'preferred-time': 'Preferred Time',
    'select-time': 'Select Time',
    'symptoms-reason': 'Symptoms/Reason for Visit',
    'emergency-contact': 'Emergency Contact',
    'medical-history': 'Previous Medical History (Optional)',
    'submit-appointment': 'Submit Appointment',
    'quick-links': 'Quick Links',
    'contact-info': 'Contact Info',
    '24-7-available': 'Available 24/7',
    'rights-reserved': 'All rights reserved.',
    'appointment-confirmed': 'Appointment Confirmed!',
    'appointment-success-message': 'Your appointment has been successfully booked. We will contact you shortly to confirm the details.',
    'ok': 'OK',
    'footer-description': 'Providing excellence in healthcare with compassion and care.'
  },
  hi: {
    'hospital-name': 'सेवा मेडिकल सेंटर',
    'nav-home': 'होम',
    'nav-about': 'हमारे बारे में',
    'nav-doctors': 'डॉक्टर',
    'nav-services': 'सेवाएं',
    'nav-facilities': 'सुविधाएं',
    'nav-contact': 'संपर्क',
    'nav-appointment': 'अपॉइंटमेंट',
    'hero-title': 'स्वास्थ्य सेवा में उत्कृष्टता',
    'hero-subtitle': 'आपके और आपके परिवार के लिए दयालु और व्यापक चिकित्सा देखभाल प्रदान करना',
    'book-appointment': 'अपॉइंटमेंट बुक करें',
    'our-services': 'हमारी सेवाएं',
    'years-experience': 'वर्षों का अनुभव',
    'expert-doctors': 'विशेषज्ञ डॉक्टर',
    'emergency-care': 'आपातकालीन देखभाल',
    'happy-patients': 'खुश मरीज़',
    'about-title': 'हमारे अस्पताल के बारे में',
    'about-subtitle': 'विश्व स्तरीय स्वास्थ्य सेवाएं प्रदान करने के लिए प्रतिबद्ध',
    'our-mission': 'हमारा मिशन',
    'mission-text': 'दयालुता, नवाचार और उत्कृष्टता के साथ असाधारण स्वास्थ्य सेवाएं प्रदान करना, व्यापक चिकित्सा देखभाल और निवारक स्वास्थ्य कार्यक्रमों के माध्यम से हमारे समुदाय की भलाई सुनिश्चित करना।',
    'our-vision': 'हमारी दृष्टि',
    'vision-text': 'महाराष्ट्र में एक अग्रणी स्वास्थ्य संस्थान के रूप में पहचाने जाना, रोगी देखभाल, चिकित्सा उत्कृष्टता और नवाचार उपचार दृष्टिकोणों के लिए हमारी प्रतिबद्धता के लिए जाना जाना।',
    'compassionate-care': 'दयालु देखभाल',
    'expert-team': 'विशेषज्ञ चिकित्सा टीम',
    '24-7-service': '24/7 आपातकालीन सेवाएं',
    'meet-doctors': 'हमारे डॉक्टरों से मिलें',
    'doctors-subtitle': 'आपकी भलाई के लिए समर्पित अनुभवी स्वास्थ्य पेशेवर',
    'general-medicine': 'सामान्य चिकित्सा और आंतरिक चिकित्सा',
    'years-exp': 'वर्षों का अनुभव',
    'expertise': 'विशेषज्ञता:',
    'diabetes-mgmt': 'मधुमेह प्रबंधन',
    'hypertension': 'उच्च रक्तचाप',
    'cardiac-care': 'हृदय देखभाल',
    'respiratory-diseases': 'श्वसन रोग',
    'mon-sat': 'सोम-शनि सुबह 9:00 - शाम 6:00',
    'gynecology-obstetrics': 'स्त्री रोग और प्रसूति विज्ञान',
    'high-risk-pregnancy': 'उच्च जोखिम गर्भावस्था',
    'normal-delivery': 'सामान्य प्रसव',
    'gynecological-surgeries': 'स्त्री रोग सर्जरी',
    'womens-health': 'महिला स्वास्थ्य',
    'mon-fri-sat': 'सोम-शुक्र सुबह 10:00 - शाम 5:00, शनि सुबह 10:00 - दोपहर 2:00',
    'services-subtitle': 'आपकी सभी चिकित्सा आवश्यकताओं के लिए व्यापक स्वास्थ्य समाधान',
    'comprehensive-checkups': 'व्यापक स्वास्थ्य जांच',
    'diabetes-hypertension-mgmt': 'मधुमेह और उच्च रक्तचाप प्रबंधन',
    'cardiac-monitoring': 'हृदय देखभाल और निगरानी',
    'respiratory-treatment': 'श्वसन रोग उपचार',
    'preventive-healthcare': 'निवारक स्वास्थ्य देखभाल',
    'health-counseling': 'स्वास्थ्य परामर्श',
    'emergency-care': 'आपातकालीन देखभाल',
    'antenatal-care': 'प्रसवपूर्व देखभाल और गर्भावस्था निगरानी',
    'normal-cesarean-deliveries': 'सामान्य और सिजेरियन प्रसव',
    'high-risk-pregnancy-mgmt': 'उच्च जोखिम गर्भावस्था प्रबंधन',
    'gynecological-consultations': 'स्त्री रोग परामर्श',
    'womens-health-screening': 'महिला स्वास्थ्य जांच',
    'family-planning': 'परिवार नियोजन सेवाएं',
    'reproductive-health': 'प्रजनन स्वास्थ्य',
    'our-facilities': 'हमारी सुविधाएं',
    'facilities-subtitle': 'अत्याधुनिक चिकित्सा सुविधाएं और उपकरण',
    'modern-operation-theaters': 'आधुनिक ऑपरेशन थिएटर',
    'advanced-surgical-facilities': 'नवीनतम तकनीक के साथ उन्नत शल्य चिकित्सा सुविधाएं',
    'modern-infrastructure': 'आधुनिक बुनियादी ढांचा',
    'contemporary-building-design': 'रोगी आराम को ध्यान में रखते हुए समकालीन भवन डिजाइन',
    'advanced-diagnostic-equipment': 'उन्नत निदान उपकरण',
    '24-7-emergency-services': '24/7 आपातकालीन सेवाएं',
    'icu-ventilator-support': 'वेंटिलेटर सहायता के साथ आईसीयू',
    'labor-delivery-rooms': 'प्रसव कक्ष',
    'modern-patient-rooms': 'आधुनिक सुविधाओं के साथ रोगी कक्ष',
    'pharmacy-premises': 'परिसर में फार्मेसी',
    'ambulance-services': 'एम्बुलेंस सेवाएं',
    'digital-health-records': 'डिजिटल स्वास्थ्य रिकॉर्ड',
    'contact-us': 'संपर्क करें',
    'contact-subtitle': 'किसी भी चिकित्सा सहायता के लिए हमसे संपर्क करें',
    'address': 'पता',
    'phone': 'फ़ोन',
    'emergency': 'आपातकाल',
    'email': 'ईमेल',
    'appointment-subtitle': 'हमारे विशेषज्ञ डॉक्टरों के साथ अपनी यात्रा निर्धारित करें',
    'patient-name': 'रोगी का नाम',
    'age': 'आयु',
    'gender': 'लिंग',
    'select-gender': 'लिंग चुनें',
    'male': 'पुरुष',
    'female': 'महिला',
    'other': 'अन्य',
    'contact-number': 'संपर्क नंबर',
    'preferred-doctor': 'पसंदीदा डॉक्टर',
    'select-doctor': 'डॉक्टर चुनें',
    'department': 'विभाग',
    'select-department': 'विभाग चुनें',
    'preferred-date': 'पसंदीदा तारीख',
    'preferred-time': 'पसंदीदा समय',
    'select-time': 'समय चुनें',
    'symptoms-reason': 'लक्षण/यात्रा का कारण',
    'emergency-contact': 'आपातकालीन संपर्क',
    'medical-history': 'पिछला चिकित्सा इतिहास (वैकल्पिक)',
    'submit-appointment': 'अपॉइंटमेंट सबमिट करें',
    'quick-links': 'त्वरित लिंक',
    'contact-info': 'संपर्क जानकारी',
    '24-7-available': '24/7 उपलब्ध',
    'rights-reserved': 'सभी अधिकार सुरक्षित।',
    'appointment-confirmed': 'अपॉइंटमेंट की पुष्टि!',
    'appointment-success-message': 'आपका अपॉइंटमेंट सफलतापूर्वक बुक हो गया है। हम जल्द ही विवरण की पुष्टि के लिए आपसे संपर्क करेंगे।',
    'ok': 'ठीक है',
    'footer-description': 'दयालुता और देखभाल के साथ स्वास्थ्य सेवा में उत्कृष्टता प्रदान करना।'
  },
  mr: {
    'hospital-name': 'सेवा वैद्यकीय केंद्र',
    'nav-home': 'मुख्य',
    'nav-about': 'आमच्याबद्दल',
    'nav-doctors': 'डॉक्टर',
    'nav-services': 'सेवा',
    'nav-facilities': 'सुविधा',
    'nav-contact': 'संपर्क',
    'nav-appointment': 'भेटीची वेळ',
    'hero-title': 'आरोग्यसेवेत उत्कृष्टता',
    'hero-subtitle': 'आपल्या आणि आपल्या कुटुंबासाठी दयाळू आणि सर्वसमावेशक वैद्यकीय काळजी प्रदान करणे',
    'book-appointment': 'भेटीची वेळ बुक करा',
    'our-services': 'आमच्या सेवा',
    'years-experience': 'वर्षांचा अनुभव',
    'expert-doctors': 'तज्ञ डॉक्टर',
    'emergency-care': 'आणीबाणीची काळजी',
    'happy-patients': 'आनंदी रुग्ण',
    'about-title': 'आमच्या रुग्णालयाबद्दल',
    'about-subtitle': 'जागतिक दर्जाच्या आरोग्यसेवा प्रदान करण्यासाठी वचनबद्ध',
    'our-mission': 'आमचे ध्येय',
    'mission-text': 'दया, नवाचार आणि उत्कृष्टतेसह असाधारण आरोग्यसेवा प्रदान करणे, सर्वसमावेशक वैद्यकीय काळजी आणि प्रतिबंधक आरोग्य कार्यक्रमांद्वारे आमच्या समुदायाचे कल्याण सुनिश्चित करणे.',
    'our-vision': 'आमची दृष्टी',
    'vision-text': 'महाराष्ट्रातील आघाडीची आरोग्य संस्था म्हणून ओळखले जाणे, रुग्ण काळजी, वैद्यकीय उत्कृष्टता आणि नाविन्यपूर्ण उपचार पध्दतींबद्दलच्या आमच्या वचनबद्धतेसाठी प्रसिद्ध.',
    'compassionate-care': 'दयाळू काळजी',
    'expert-team': 'तज्ञ वैद्यकीय टीम',
    '24-7-service': '24/7 आणीबाणी सेवा',
    'meet-doctors': 'आमच्या डॉक्टरांना भेटा',
    'doctors-subtitle': 'आपल्या आरोग्यासाठी समर्पित अनुभवी आरोग्य व्यावसायिक',
    'general-medicine': 'सामान्य वैद्यशास्त्र आणि अंतर्गत वैद्यशास्त्र',
    'years-exp': 'वर्षांचा अनुभव',
    'expertise': 'तज्ञता:',
    'diabetes-mgmt': 'मधुमेह व्यवस्थापन',
    'hypertension': 'उच्च रक्तदाब',
    'cardiac-care': 'हृदयविकार उपचार',
    'respiratory-diseases': 'श्वसन रोग',
    'mon-sat': 'सोम-शनि सकाळ 9:00 - संध्याकाळ 6:00',
    'gynecology-obstetrics': 'स्त्रीरोग आणि प्रसूतिशास्त्र',
    'high-risk-pregnancy': 'उच्च जोखमीची गर्भावस्था',
    'normal-delivery': 'सामान्य प्रसूती',
    'gynecological-surgeries': 'स्त्रीरोग शस्त्रक्रिया',
    'womens-health': 'महिला आरोग्य',
    'mon-fri-sat': 'सोम-शुक्र सकाळ 10:00 - संध्याकाळ 5:00, शनि सकाळ 10:00 - दुपार 2:00',
    'services-subtitle': 'आपल्या सर्व वैद्यकीय गरजांसाठी सर्वसमावेशक आरोग्य उपाय',
    'comprehensive-checkups': 'सर्वसमावेशक आरोग्य तपासणी',
    'diabetes-hypertension-mgmt': 'मधुमेह आणि उच्च रक्तदाब व्यवस्थापन',
    'cardiac-monitoring': 'हृदयविकार काळजी आणि निरीक्षण',
    'respiratory-treatment': 'श्वसन रोग उपचार',
    'preventive-healthcare': 'प्रतिबंधक आरोग्यसेवा',
    'health-counseling': 'आरोग्य सल्ला',
    'emergency-care': 'आणीबाणीची काळजी',
    'antenatal-care': 'गर्भधारणा पूर्व काळजी आणि गर्भावस्था निरीक्षण',
    'normal-cesarean-deliveries': 'सामान्य आणि सिझेरियन प्रसूती',
    'high-risk-pregnancy-mgmt': 'उच्च जोखमीची गर्भावस्था व्यवस्थापन',
    'gynecological-consultations': 'स्त्रीरोग सल्लामसलत',
    'womens-health-screening': 'महिला आरोग्य तपासणी',
    'family-planning': 'कुटुंब नियोजन सेवा',
    'reproductive-health': 'पुनरुत्पादक आरोग्य',
    'our-facilities': 'आमच्या सुविधा',
    'facilities-subtitle': 'अत्याधुनिक वैद्यकीय सुविधा आणि उपकरणे',
    'modern-operation-theaters': 'आधुनिक ऑपरेशन थिएटर',
    'advanced-surgical-facilities': 'नवीनतम तंत्रज्ञानासह प्रगत शस्त्रक्रिया सुविधा',
    'modern-infrastructure': 'आधुनिक पायाभूत सुविधा',
    'contemporary-building-design': 'रुग्णांच्या आरामाची काळजी घेऊन समकालीन इमारत डिझाइन',
    'advanced-diagnostic-equipment': 'प्रगत निदान उपकरणे',
    '24-7-emergency-services': '24/7 आणीबाणी सेवा',
    'icu-ventilator-support': 'व्हेंटिलेटर सहाय्यासह ICU',
    'labor-delivery-rooms': 'प्रसूती खोल्या',
    'modern-patient-rooms': 'आधुनिक सुविधांसह रुग्ण खोल्या',
    'pharmacy-premises': 'परिसरात फार्मसी',
    'ambulance-services': 'रुग्णवाहिका सेवा',
    'digital-health-records': 'डिजिटल आरोग्य नोंदी',
    'contact-us': 'आमच्याशी संपर्क साधा',
    'contact-subtitle': 'कोणत्याही वैद्यकीय सहाय्यासाठी आमच्याशी संपर्क साधा',
    'address': 'पत्ता',
    'phone': 'फोन',
    'emergency': 'आणीबाणी',
    'email': 'ईमेल',
    'appointment-subtitle': 'आमच्या तज्ञ डॉक्टरांसह आपली भेट निश्चित करा',
    'patient-name': 'रुग्णाचे नाव',
    'age': 'वय',
    'gender': 'लिंग',
    'select-gender': 'लिंग निवडा',
    'male': 'पुरुष',
    'female': 'स्त्री',
    'other': 'इतर',
    'contact-number': 'संपर्क क्रमांक',
    'preferred-doctor': 'पसंतीचे डॉक्टर',
    'select-doctor': 'डॉक्टर निवडा',
    'department': 'विभाग',
    'select-department': 'विभाग निवडा',
    'preferred-date': 'पसंतीची तारीख',
    'preferred-time': 'पसंतीची वेळ',
    'select-time': 'वेळ निवडा',
    'symptoms-reason': 'लक्षणे/भेटीचे कारण',
    'emergency-contact': 'आणीबाणी संपर्क',
    'medical-history': 'मागील वैद्यकीय इतिहास (पर्यायी)',
    'submit-appointment': 'भेटीची वेळ सबमिट करा',
    'quick-links': 'त्वरित लिंक्स',
    'contact-info': 'संपर्क माहिती',
    '24-7-available': '24/7 उपलब्ध',
    'rights-reserved': 'सर्व हक्क राखून ठेवले.',
    'appointment-confirmed': 'भेटीची वेळ पुष्टी झाली!',
    'appointment-success-message': 'तुमची भेटीची वेळ यशस्वीरित्या बुक झाली आहे. तपशीलांची पुष्टी करण्यासाठी आम्ही लवकरच तुमच्याशी संपर्क साधू.',
    'ok': 'ठीक आहे',
    'footer-description': 'दया आणि काळजीसह आरोग्यसेवेत उत्कृष्टता प्रदान करणे.'
  }
};

// Global variables
let currentLanguage = 'en';
let currentTheme = 'light';
let appointments = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Load saved preferences
  loadPreferences();
  
  // Initialize time display
  updateTime();
  setInterval(updateTime, 1000);
  
  // Initialize event listeners
  initializeEventListeners();
  
  // Initialize Google Maps
  initializeMap();
  
  // Initialize scroll animations
  initializeScrollAnimations();
  
  // Set minimum date for appointment booking
  setMinimumDate();
}

function loadPreferences() {
  const savedTheme = localStorage.getItem('theme');
  const savedLanguage = localStorage.getItem('language');
  
  if (savedTheme) {
    currentTheme = savedTheme;
    applyTheme(currentTheme);
  }
  
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
    changeLanguage(currentLanguage);
  }
  
  // Load existing appointments
  const savedAppointments = localStorage.getItem('appointments');
  if (savedAppointments) {
    appointments = JSON.parse(savedAppointments);
  }
}

function initializeEventListeners() {
  // Navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }
  
  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
  
  // Language selector
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      changeLanguage(lang);
    });
  });
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Appointment form
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', handleAppointmentSubmit);
  }
  
  // Smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
  
  // Department and doctor synchronization
  const departmentSelect = document.getElementById('department');
  const doctorSelect = document.getElementById('preferred-doctor');
  
  if (departmentSelect && doctorSelect) {
    departmentSelect.addEventListener('change', (e) => {
      updateDoctorOptions(e.target.value);
    });
  }
}

function updateTime() {
  const timeDisplay = document.getElementById('current-time');
  if (timeDisplay) {
    const now = new Date();
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset);
    
    const timeString = istTime.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Kolkata'
    });
    
    timeDisplay.textContent = `${timeString} IST`;
  }
}

function changeLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update active language button
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-key]');
  translatableElements.forEach(element => {
    const key = element.dataset.key;
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update select options
  updateSelectOptions();
}

function updateSelectOptions() {
  // Update gender options
  const genderSelect = document.getElementById('patient-gender');
  if (genderSelect) {
    const options = genderSelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.dataset.key;
      if (key && translations[currentLanguage][key]) {
        option.textContent = translations[currentLanguage][key];
      }
    });
  }
  
  // Update doctor options
  const doctorSelect = document.getElementById('preferred-doctor');
  if (doctorSelect) {
    const options = doctorSelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.dataset.key;
      if (key && translations[currentLanguage][key]) {
        option.textContent = translations[currentLanguage][key];
      }
    });
  }
  
  // Update department options
  const departmentSelect = document.getElementById('department');
  if (departmentSelect) {
    const options = departmentSelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.dataset.key;
      if (key && translations[currentLanguage][key]) {
        option.textContent = translations[currentLanguage][key];
      }
    });
  }
  
  // Update time options
  const timeSelect = document.getElementById('preferred-time');
  if (timeSelect) {
    const options = timeSelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.dataset.key;
      if (key && translations[currentLanguage][key]) {
        option.textContent = translations[currentLanguage][key];
      }
    });
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
  document.body.setAttribute('data-color-scheme', theme);
  
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.classList.toggle('fa-moon', theme === 'light');
    themeIcon.classList.toggle('fa-sun', theme === 'dark');
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

function updateDoctorOptions(department) {
  const doctorSelect = document.getElementById('preferred-doctor');
  if (!doctorSelect) return;
  
  // Reset options
  doctorSelect.innerHTML = `<option value="" data-key="select-doctor">${translations[currentLanguage]['select-doctor']}</option>`;
  
  if (department === 'general-medicine') {
    doctorSelect.innerHTML += '<option value="dr-raviraj-pawar">Dr. Raviraj Pawar </option>';
  } else if (department === 'pediatrician') {
    doctorSelect.innerHTML += '<option value="dr-apurva-pawar">Dr. Apurva Pawar</option>';
  } else {
    // Show all doctors if no specific department selected
    doctorSelect.innerHTML += '<option value="dr-raviraj-pawar">Dr. Raviraj Pawar</option>';
    doctorSelect.innerHTML += '<option value="dr-apurva-pawar">Dr. Apurva Pawar</option>';
  }
}

function setMinimumDate() {
  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    
    dateInput.min = `${year}-${month}-${day}`;
  }
}

function handleAppointmentSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const appointmentData = {
    id: Date.now(),
    patientName: document.getElementById('patient-name').value,
    age: document.getElementById('patient-age').value,
    gender: document.getElementById('patient-gender').value,
    contactNumber: document.getElementById('contact-number').value,
    email: document.getElementById('email').value,
    preferredDoctor: document.getElementById('preferred-doctor').value,
    department: document.getElementById('department').value,
    preferredDate: document.getElementById('preferred-date').value,
    preferredTime: document.getElementById('preferred-time').value,
    symptoms: document.getElementById('symptoms').value,
    emergencyContact: document.getElementById('emergency-contact').value,
    medicalHistory: document.getElementById('medical-history').value,
    submittedAt: new Date().toISOString(),
    language: currentLanguage
  };
  
  // Validate required fields
  if (!appointmentData.patientName || !appointmentData.contactNumber || 
      !appointmentData.email || !appointmentData.preferredDate || 
      !appointmentData.preferredTime || !appointmentData.symptoms) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Add to appointments array
  appointments.push(appointmentData);
  
  // Save to localStorage (simulating JSON storage for GitHub Pages)
  localStorage.setItem('appointments', JSON.stringify(appointments));
  
  // Show success modal
  showSuccessModal(appointmentData);
  
  // Reset form
  e.target.reset();
}

function showSuccessModal(appointmentData) {
  const modal = document.getElementById('success-modal');
  const appointmentDetails = document.getElementById('appointment-details');
  
  if (modal && appointmentDetails) {
    // Populate appointment details
    appointmentDetails.innerHTML = `
      <p><strong>${translations[currentLanguage]['patient-name']}:</strong> ${appointmentData.patientName}</p>
      <p><strong>${translations[currentLanguage]['preferred-doctor']}:</strong> ${getDoctorDisplayName(appointmentData.preferredDoctor)}</p>
      <p><strong>${translations[currentLanguage]['department']}:</strong> ${getDepartmentDisplayName(appointmentData.department)}</p>
      <p><strong>${translations[currentLanguage]['preferred-date']}:</strong> ${formatDate(appointmentData.preferredDate)}</p>
      <p><strong>${translations[currentLanguage]['preferred-time']}:</strong> ${appointmentData.preferredTime}</p>
      <p><strong>${translations[currentLanguage]['contact-number']}:</strong> ${appointmentData.contactNumber}</p>
    `;
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('show');
  }
}

function closeModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.remove('show');
    modal.classList.add('hidden');
  }
}

function getDoctorDisplayName(doctorValue) {
  switch(doctorValue) {
    case 'dr-raviraj-pawar': return 'Dr. Raviraj Pawar';
    case 'dr-apurva-pawar': return 'Dr. Apurva Pawar';
    default: return doctorValue;
  }
}

function getDepartmentDisplayName(departmentValue) {
  switch(departmentValue) {
    case 'general-medicine': return translations[currentLanguage]['general-medicine'];
    case 'gynecology': return translations[currentLanguage]['gynecology-obstetrics'];
    default: return departmentValue;
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(currentLanguage === 'en' ? 'en-US' : currentLanguage === 'hi' ? 'hi-IN' : 'mr-IN');
}

function initializeMap() {
  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    // Simple map placeholder for GitHub Pages deployment
    mapContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--color-text-secondary);">
        <i class="fas fa-map-marker-alt" style="font-size: 48px; margin-bottom: 16px; color: var(--color-primary);"></i>
        <p style="text-align: center; margin: 0;">
          <strong>Gajanan Hospital And Baal Rugnalay, Phulambri</strong><br>
          Main Street, Sambhajinagar-Jaloan Highway<br>
          Phulambri - 431111, Maharashtra, India
        </p>
        <a href="https://maps.app.goo.gl/VREcYcyVExoCMyoH8" target="_blank" 
           style="margin-top: 16px; color: var(--color-primary); text-decoration: underline;">
          View on Google Maps
        </a>
      </div>
    `;
  }
}

function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.doctor-card, .service-card, .facility-card, .facility-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    element.classList.add('scroll-animation');
    observer.observe(element);
  });
}

// Utility functions for external calls
window.scrollToSection = scrollToSection;
window.closeModal = closeModal;

// Export appointments data for potential GitHub integration
window.getAppointmentsData = function() {
  return {
    appointments: appointments,
    exportTime: new Date().toISOString(),
    totalAppointments: appointments.length
  };
};

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  
  if (window.innerWidth > 768 && navMenu && navToggle) {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
});

// Handle offline functionality
window.addEventListener('online', () => {
  console.log('Connection restored');
});

window.addEventListener('offline', () => {
  console.log('Connection lost - operating in offline mode');
});
