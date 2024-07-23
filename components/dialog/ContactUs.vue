<template>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-main">
      <div class="modal-main-header">
        <div class="modal-header-title">Contact Us.</div>
        <div class="modal-header-content" v-if="success === false">
          Here’s where your journey with us begins. Tell us more about your
          project by filling the form below.
        </div>
      </div>
      <div class="modal-main-body" v-if="success === false">
        <div class="modal-body-info">
          <input
            class="input-info"
            type="text"
            v-model="name"
            placeholder="Full Name"
          />
          <input
            class="input-info"
            type="email"
            v-model="email"
            placeholder="Email"
          />
          <input
            class="input-info"
            type="text"
            v-model="budget"
            placeholder="Estimated Budget"
          />
        </div>
        <div class="modal-body-submit">
          <textarea
            class="input-info"
            type="text"
            v-model="explanation"
            placeholder="Tell us about your project"
          ></textarea>
          <button class="submit-btn" @click="submitForm">Submit</button>
        </div>
      </div>
      <div class="modal-main-body-success" v-if="success === true">
        <img class="success-rocket" src="/rocket.png" alt="rocket" />
        <div class="modal-success-content">
          <p>All done! A dedicated CSM will be in touch with you shortly.</p>
        </div>
        <button class="close-btn" @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as bulmaToast from "bulma-toast";
export default {
  name: "ContactUsModal",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      success: false,
      name: "",
      email: "",
      budget: "",
      explanation: "",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    close() {
      this.success = false;
      this.name = "";
      this.email = "";
      this.budget = "";
      this.explanation = "";
      this.$emit("close");
    },
    async submitForm() {
      if (!(this.name && this.email && this.budget && this.explanation)) {
        bulmaToast.toast({
          message: "Please fill all the fields!",
          type: "is-danger",
          dismissible: true,
          animate: { in: "fadeIn", out: "fadeOut" },
        });
      } else if (!this.reg.test(this.email)) {
        bulmaToast.toast({
          message: "Your Email is invalid! Please input correct email address!",
          type: "is-danger",
          dismissible: true,
          animate: { in: "fadeIn", out: "fadeOut" },
        });
      } else {
        await $fetch("/api/mailSend", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            budget: this.budget,
            explanation: this.explanation,
          }),
        }).then((response) => {
          if (response.data) {
            this.success = true;
          } else {
            this.success = false;
          }
        });
      }
    },
  },
};
</script>

<style>
.modal {
  padding: 30px 50px;
  > .modal-main {
    min-width: 88%;
    background-color: blueviolet;
    padding: 87px 81px 137px 70px;
    background: linear-gradient(
      180deg,
      rgba(22, 22, 22, 0.8) 68.95%,
      rgba(24, 23, 77, 0.745833) 100%
    );
    border-radius: 30px;
    overflow: auto;

    display: flex;
    flex-direction: column;
    z-index: 40;

    > .modal-main-header {
      display: flex;
      flex-direction: column;
      gap: 7px;

      > .modal-header-title {
        font-family: Futura;
        font-size: 64px;
        font-weight: 700;
        line-height: 73.54px;
        text-align: left;
        color: #ffffff;
      }

      > .modal-header-content {
        font-family: Futura;
        font-size: 32px;
        font-weight: 500;
        line-height: 42.5px;
        text-align: left;
        color: #ffffff;
      }
    }

    > .modal-main-body {
      display: flex;
      justify-content: space-between;
      margin-top: 112px;
      gap: 20px;

      > .modal-body-info {
        display: flex;
        flex-direction: column;
        gap: 54px;

        > .input-info {
          width: 559px;
          opacity: 0px;
          background: #d9d9d91a;
          border: 1px solid #878484;
          padding: 28px 40px;

          font-family: Futura;
          font-size: 36px;
          font-weight: 500;
          line-height: 47.81px;
          text-align: left;
          color: #878484;
        }

        > .input-info::-webkit-input-placeholder {
          color: #ffffffbf;
        }
      }

      > .modal-body-submit {
        display: flex;
        flex-direction: column;
        gap: 54px;

        > .input-info {
          width: 719px;
          height: 260px;
          opacity: 0px;
          background: #d9d9d91a;
          border: 1px solid #878484;
          padding: 38px 45px;

          font-family: Futura;
          font-size: 36px;
          font-weight: 500;
          line-height: 47.81px;
          text-align: left;
          color: #878484;
        }

        > .input-info::-webkit-input-placeholder {
          color: #ffffffbf;
        }

        > .submit-btn {
          width: 719px;
          padding: 28px 47px;
          border-radius: 15px;
          border: 1px 0px 0px 0px;
          opacity: 0px;
          border: 1px solid #878484;
          background: #d9d9d91f;

          font-family: Futura;
          font-size: 36px;
          font-weight: 500;
          line-height: 47.81px;
          text-align: center;
          color: #fff5f5;
          cursor: pointer;
        }
      }
    }

    > .modal-main-body-success {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      align-items: center;
      > .success-rocket {
        width: 277.09px;
        height: 287.31px;
        transform: rotate(5.69deg);
      }

      > .modal-success-content {
        margin-top: 54px;
        display: flex;
        justify-content: center;

        p {
          font-family: Futura;
          font-size: 36px;
          font-weight: 500;
          line-height: 47.81px;
          text-align: center;
          color: #ffffff;
        }
      }

      > .close-btn {
        margin-top: 69px;
        width: 719px;
        padding: 28px 47px;
        border-radius: 15px;
        border: 1px 0px 0px 0px;
        opacity: 0px;
        border: 1px solid #878484;
        background: #d9d9d91f;

        font-family: Futura;
        font-size: 36px;
        font-weight: 500;
        line-height: 47.81px;
        text-align: center;
        color: #fff5f5;
        cursor: pointer;
      }
    }
  }

  > .modal-main::-webkit-scrollbar {
    width: 0px;
  }
}

@media all and (max-width: 1500px) {
  .modal {
    padding: 50px 200px;
    > .modal-main {
      padding: 60px 81px 100px 70px;

      > .modal-main-header {
        > .modal-header-title {
          font-size: 50px;
        }

        > .modal-header-content {
          font-size: 24px;
        }
      }

      > .modal-main-body {
        display: flex;
        flex-direction: column;
        margin-top: 70px;
        gap: 40px;

        > .modal-body-info {
          gap: 40px;
          > .input-info {
            width: 100%;
            padding: 18px 40px;
            font-size: 28px;
            line-height: 32px;
          }
        }

        > .modal-body-submit {
          gap: 40px;
          > .input-info {
            width: 100%;
            padding: 24px 40px;
            font-size: 28px;
            line-height: 32px;
          }

          > .submit-btn {
            width: 100%;
            font-size: 28px;
            line-height: 32px;
            padding: 22px 47px;
          }
        }
      }

      > .modal-main-body-success {
        > .success-rocket {
          width: 200px;
          height: 210px;
        }

        > .modal-success-content {
          margin-top: 45px;

          p {
            font-size: 28px;
            line-height: 30px;
          }
        }

        > .close-btn {
          margin-top: 50px;
          width: 100%;
          padding: 18px 40px;
          font-size: 28px;
          line-height: 32px;
        }
      }
    }
  }
}

@media all and (max-width: 1000px) {
  .modal {
    padding: 50px 100px;
    > .modal-main {
      padding: 40px 60px 80px 50px;

      > .modal-main-header {
        > .modal-header-title {
          font-size: 35px;
        }

        > .modal-header-content {
          font-size: 20px;
        }
      }

      > .modal-main-body {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 40px;

        > .modal-body-info {
          gap: 30px;
          > .input-info {
            width: 100%;
            padding: 12px 30px;
            font-size: 20px;
            line-height: 24px;
          }
        }

        > .modal-body-submit {
          > .input-info {
            width: 100%;
            height: 150px;
            padding: 12px 30px;
            font-size: 20px;
            line-height: 24px;
          }

          > .submit-btn {
            width: 100%;
            padding: 12px 30px;
            font-size: 20px;
            line-height: 24px;
          }
        }
      }

      > .modal-main-body-success {
        > .success-rocket {
          width: 160px;
          height: 170px;
        }

        > .modal-success-content {
          margin-top: 30px;

          p {
            font-size: 24px;
            line-height: 28px;
          }
        }

        > .close-btn {
          margin-top: 50px;
          width: 100%;
          padding: 12px 30px;
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
}

@media all and (max-width: 700px) {
  .modal {
    padding: 20px 40px;
    > .modal-main {
      padding: 20px 40px 60px 30px;

      > .modal-main-header {
        > .modal-header-title {
          font-size: 35px;
        }

        > .modal-header-content {
          font-size: 20px;
          line-height: 28px;
        }
      }

      > .modal-main-body {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px;

        > .modal-body-info {
          gap: 20px;
          > .input-info {
            width: 100%;
            padding: 10px 20px;
            font-size: 16px;
            line-height: 24px;
          }
        }

        > .modal-body-submit {
          gap: 20px;
          > .input-info {
            width: 100%;
            height: 150px;
            padding: 10px 20px;
            font-size: 16px;
            line-height: 24px;
          }

          > .submit-btn {
            width: 100%;
            padding: 10px 20px;
            font-size: 18px;
            line-height: 24px;
          }
        }
      }

      > .modal-main-body-success {
        > .success-rocket {
          width: 130px;
          height: 140px;
        }

        > .modal-success-content {
          margin-top: 20px;

          p {
            font-size: 20px;
            line-height: 22px;
          }
        }

        > .close-btn {
          margin-top: 30px;
          width: 100%;
          padding: 10px 20px;
          font-size: 18px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
