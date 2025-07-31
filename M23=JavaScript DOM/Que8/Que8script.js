
        const submitBtn = document.getElementById('submit');
        const shopingItemInput = document.getElementById('shopingItem');
        const itemList = document.querySelector('.item-list');

        const deleteButton = document.querySelectorAll('.delete-btn');
        deleteButton.forEach(addEventToDeleteBtn);




        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const shopingItemValue = shopingItemInput.value.trim();
            if (shopingItemValue) {
                addshopingItem(shopingItemValue);
                shopingItemInput.value = '';
            } else {
                alert('Please enter a shopingItem');
            }
        });



        function addshopingItem(value){
            const itemHeding = document.createElement('li');
            itemHeding.classList.add('item');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            itemHeding.textContent = value;
            itemHeding.appendChild(deleteBtn);
            itemList.appendChild(itemHeding);
            addEventToDeleteBtn(deleteBtn);
        }


        function addEventToDeleteBtn(deletebtn){

            deletebtn.addEventListener('click', (event) => {
               event.target.parentElement.remove();
               console.log('shopingItem deleted');             
               
            });

                    

        };

