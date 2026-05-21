document.getelementbyid('whatsappForm').addeventlistener('submit', function(e) {
    e.preventdefault(); // prevents the page from refreshing

    // 1. update real whatsup number (uganda country code 256, no plus sign)
    const whatsappNumber = "256778732386"; 

    // 2. grab the information the user typed in
    const name = document.getelementbyId('name').value;
    const phone = document.getelementbyId('phone').value;
    const interest = document.getelementbyId('interest').value;

    // 3. format the message into a professional layout matching nats juice menu
    const message = `hello nats juice! I would like to request an order quote.%0A%0A` +
                    `*name:* ${encodeuricomponent(name)}%0A` +
                    `*phone:* ${encodeuricomponent(phone)}%0A` +
                    `*menu selection:* ${encodeuricomponent(interest)}`;

    // 4. Open the whatsapp link in a clean new tab
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});
