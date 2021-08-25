<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1>Kontakt</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-4 offset-lg-1 mb-4">
        <contact-item
          v-for="(detail, i) in contactDetails"
          :key="i"
          :detail="detail"
        />
      </div>
      <div class="col-lg-5 offset-lg-2 col-md-8">
        <form
          v-if="!formIsHidden"
          id="contact-form"
          novalidate="true"
          method="POST"
          action="/contactMail.php"
          @submit.prevent="validateForm"
        >
          <div class="col-xs-12 col-sm-12 mb-3">
            <div class="input-contain">
              <input
                class="w-100"
                type="text"
                id="name"
                v-model="form.name"
                name="name"
                autocomplete="off"
                aria-labelledby="placeholder-name"
                @keyup="keyUpForm"
                :class="{
                  'red-border': errors.filter((x) => x.field == 'name') != '',
                }"
              />
              <label class="placeholder-text" for="name" id="placeholder-name">
                <div
                  class="text"
                  :class="{
                    'red-text': errors.filter((x) => x.field == 'name') != '',
                  }"
                >
                  Name
                </div>
              </label>
            </div>
            <p
              v-if="errors.filter((x) => x.field == 'name') != ''"
              class="pt-1"
            >
              {{ errors.filter((x) => x.field == "name")[0]["msg"] }}
            </p>
          </div>
          <div class="col-xs-12 col-sm-12 mb-3">
            <div class="input-contain">
              <input
                class="w-100"
                type="text"
                id="email"
                v-model="form.email"
                name="email"
                autocomplete="off"
                aria-labelledby="placeholder-email"
                @keyup="keyUpForm"
                :class="{
                  'red-border': errors.filter((x) => x.field == 'email') != '',
                }"
              />
              <label
                class="placeholder-text"
                for="email"
                id="placeholder-email"
              >
                <div
                  class="text"
                  :class="{
                    'red-text': errors.filter((x) => x.field == 'email') != '',
                  }"
                >
                  Email
                </div>
              </label>
            </div>
            <p
              v-if="errors.filter((x) => x.field == 'email') != ''"
              class="pt-1"
            >
              {{ errors.filter((x) => x.field == "email")[0]["msg"] }}
            </p>
          </div>
          <div class="col-xs-12 col-sm-12 mb-3">
            <div class="input-contain">
              <input
                class="w-100"
                type="text"
                id="subject"
                v-model="form.subject"
                name="subject"
                autocomplete="off"
                aria-labelledby="placeholder-subject"
                @keyup="keyUpForm"
                :class="{
                  'red-border':
                    errors.filter((x) => x.field == 'subject') != '',
                }"
              />
              <label
                class="placeholder-text"
                for="subject"
                id="placeholder-subject"
              >
                <div
                  class="text"
                  :class="{
                    'red-text':
                      errors.filter((x) => x.field == 'subject') != '',
                  }"
                >
                  Betreff
                </div>
              </label>
            </div>
            <p
              v-if="errors.filter((x) => x.field == 'subject') != ''"
              class="pt-1"
            >
              {{ errors.filter((x) => x.field == "subject")[0]["msg"] }}
            </p>
          </div>
          <div class="col-xs-12 col-sm-12">
            <div class="input-contain">
              <textarea
                class="w-100"
                name="message"
                id="message"
                v-model="form.message"
                rows="6"
                @keyup="keyUpForm"
                :class="{
                  'red-border':
                    errors.filter((x) => x.field == 'message') != '',
                }"
              ></textarea>
              <label
                class="placeholder-text"
                for="message"
                id="placeholder-message"
              >
                <div
                  class="text"
                  :class="{
                    'red-text':
                      errors.filter((x) => x.field == 'message') != '',
                  }"
                >
                  Nachricht
                </div>
              </label>
            </div>
            <p v-if="errors.filter((x) => x.field == 'message') != ''">
              {{ errors.filter((x) => x.field == "message")[0]["msg"] }}
            </p>
          </div>
          <p v-if="formSubmitError">Sorry, fehler beim Senden!</p>

          <div class="col-xs-12 col-sm-12">
            <button type="submit" class="butti-btn mb-5 w-100">
              Nachricht senden
            </button>
          </div>
        </form>
        <div v-if="formIsHidden" id="formSuccess">
          <p>Nachricht wurde gesendet!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactItem from "./ContactItem.vue";
export default {
  name: "Resume",
  components: {
    ContactItem,
  },
  data: () => ({
    contactDetails: [
      {
        favicon: ["fas", "envelope"],
        subject: "Email",
        content: "pascal (a) butterbach.org",
        href: "mailto:pascal@butterbach.org",
      },
      {
        favicon: ["fas", "mobile"],
        subject: "Mobil",
        content: "01590 | 8493743",
        href: "",
      },
      {
        favicon: ["fab", "discord"],
        subject: "Discord",
        content: "soios#9089",
        href: "https://discordapp.com/users/396335657632661504",
      },
    ],
    errors: [],
    form: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    formIsHidden: false,
    formSubmitError: false,
  }),
  mounted() {
    document.getElementById("name").setAttribute("value", "");
    document.getElementById("email").setAttribute("value", "");
    document.getElementById("subject").setAttribute("value", "");
    document.getElementById("message").setAttribute("value", "");
  },
  methods: {
    keyUpForm: function (el) {
      console.log(el.path[0]);

      el.path[0].setAttribute("value", el.path[0].value.trim());
    },
    validateForm: function () {
      this.errors = [];

      if (!this.form.name) {
        this.errors.push({ field: "name", msg: "Bitte Namen angeben." });
      } else if (this.form.name.length < 2) {
        this.errors.push({ field: "name", msg: "Name ist zu kurz." });
      }

      if (!this.form.email) {
        this.errors.push({ field: "email", msg: "Bitte Email angeben." });
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push({
          field: "email",
          msg: "Bitte eine korrekte Email angeben.",
        });
      }

      if (!this.form.subject) {
        this.errors.push({ field: "subject", msg: "Bitte Betreff angeben." });
      } else if (this.form.subject.length < 2) {
        this.errors.push({ field: "subject", msg: "Betreff ist zu kurz." });
      }

      if (!this.form.message) {
        this.errors.push({
          field: "message",
          msg: "Bitte Nachricht eingeben.",
        });
      } else if (this.form.message.length < 10) {
        this.errors.push({ field: "message", msg: "Nachricht ist zu kurz." });
      }

      if (!this.errors.length) {
        this.axios.post("/contactMail.php", this.form).then((res) => {
          if (res.request.response.trim() === "success") {
            this.formIsHidden = true;
          } else {
            this.formSubmitError = true;
          }
        });
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
img {
  height: 300px;
}

form p {
  letter-spacing: 1.4px;
  padding: 0 0 0 5px;
  color: var(--text-color-accent);
}

#formSuccess {
  padding: 5px;
  text-align: center;
}

.red-text {
  color: var(--text-color-accent) !important;
}
.red-border {
  border-color: var(--text-color-accent);
}

.butti-btn {
  width: 23.3rem;
}

.input-contain {
  position: relative;
}

input {
  height: 3rem;
}

textarea {
  resize: none;
}

input,
textarea {
  width: 33rem;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--text-color-accent);
}

input:focus + .placeholder-text .text,
textarea:focus + .placeholder-text .text,
:not(input[value=""]):not(textarea[value=""]) + .placeholder-text .text {
  background-color: var(--background-color);
  width: auto;
  font-size: 0.9rem;
  transform: translate(0, -110%);
}
input:focus + .placeholder-text .text,
textarea:focus + .placeholder-text .text {
  color: var(--text-color-accent) !important;
}

.placeholder-text {
  letter-spacing: 1.2px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid transparent;
  background-color: transparent;
  pointer-events: none;
  display: flex;
  align-items: center;
}

textarea + .placeholder-text .text {
  position: absolute;
  top: 0.8rem;
}

.text {
  font-size: 1.1rem;
  padding: 0;
  background-color: transparent;
  transform: translate(0);
  color: var(--text-color);
  transition: transform 0.15s ease-out, font-size 0.15s ease-out,
    background-color 0.2s ease-out, color 0.15s ease-out;
}

input,
textarea,
.placeholder-text {
  font-size: 1.1rem;
  padding: 1rem 1.2rem;
}

@media (max-width: 40rem) {
  input,
  textarea {
    width: 88vw;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  background: var(--background-color);
  -webkit-text-fill-color: var(--text-color);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>