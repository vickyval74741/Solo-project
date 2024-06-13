

        document.getElementById('applicationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const correctReferenceNumber = '123456';
            const correctUsername = 'val74741';

            const referenceNumber = document.getElementById('ReferenceNumber').value;
            const username = document.getElementById('Username').value;

            
            if (referenceNumber === correctReferenceNumber && username === correctUsername) {
                alert('Login successful!');
              
                window.location.href = 'dashboard.html'; 
            } else {
                alert('Invalid Reference No/UTME No or Surname');
            }
        });
    