const getState = ({ getStore, getActions, setStore }) => {
  const url = "https://playground.4geeks.com/apis/fake/contact/";
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      CreateContactBook: async (full_name, email, address, phone) => {
        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
              full_name: full_name,
              email: email,
              agenda_slug: "agenda_samuel",
              address: address,
              phone: phone,
            }),
            headers: {
              "content-type": "Application/json",
            },
          });

          if (response.ok) {
            const actions = getActions();
            actions.ContactsList();
            return await response.json();
          } else {
            return console.log("Contacto existente");
          }
        } catch (error) {
          return console.log("Post error: ", error);
        }
      },

      ContactsList: async () => {
        const store = getStore();

        try {
          const response = await fetch(url + "agenda/agenda_samuel", {
            method: "GET",
            headers: {
              "content-type": "Application/json",
            },
          });

          if (response.ok) {
            const body = await response.json();
            setStore({ contacts: body });
            return;
          }
        } catch (error) {
          console.log(error);
        }
      },

      DeleteContact: async (contact_id) => {
        try {
          const response = await fetch(url + `${contact_id}`, {
            method: "DELETE",
            headers: {
              "content-type": "Application/json",
            },
          });

          if (response.ok) {
            const actions = getActions();
            actions.ContactsList();
            console.log("eliminado");
          }
        } catch (error) {
          console.log(error);
        }
      },

      UpdateContact: async (contact_id, full_name, email, address, phone) => {
        console.log("En el flux contact id: ", contact_id);
        try {
          const response = await fetch(url + `${contact_id}`, {
            method: "PUT",
            body: JSON.stringify({
              full_name: full_name,
              email: email,
              agenda_slug: "agenda_samuel",
              address: address,
              phone: phone,
            }),
            headers: {
              "content-type": "Application/json",
            },
          });

          if (response.ok) {
            console.log("se actualizo correctamente");
            const actions = getActions();
            actions.ContactsList();
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
