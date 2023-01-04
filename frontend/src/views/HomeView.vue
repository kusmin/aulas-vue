<script setup></script>

<template>
  <main>
    <h1>Formulario</h1>
    <form @submit="createHospedagem" method="post">
      <p>
        <label for="name">Nome</label>
        <input id="name" v-model="name" type="text" name="name" />
      </p>

      <p>
        <label for="age">Idade</label>
        <input id="age" v-model="age" type="number" name="age" min="0" />
      </p>

      <p>
        <label for="dog">Cachorro</label>
        <input id="dog" v-model="dog" type="text" name="dog" />
      </p>

      <p>
        <label for="price">Preço da diaria</label>
        <input id="price" v-model="price" type="number" name="price" min="0" />
      </p>

      <p>
        <input type="submit" value="Enviar" />
      </p>
    </form>

    <p v-if="mensagem" :style="{ color: retornarCor }">
      {{ mensagem }}
    </p>

    <div v-id="hospedagens">
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">idade</th>
              <th scope="col">Cachorro</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(hospedagem, index) in hospedagens" :key="index">
              <td>
                {{ hospedagem.name }}
              </td>

              <td>
                {{ hospedagem.idade }}
              </td>

              <td>
                {{ hospedagem.dog }}
              </td>

              <td>
                {{ hospedagem.price }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import HospedagemService from "@/services/HospedagemService";
export default {
  data() {
    return {
      name: "",
      age: 0,
      dog: "",
      price: 0,
      mensagem: "",
      hospedagens: [],
    };
  },
  computed: {
    retornarCor() {
      return this.age && this.age > 30 ? "red" : "green";
    },
  },
  methods: {
    retornarNome(name) {
      console.log(name);
      return `O usuario ${name}`;
    },
    async createHospedagem(form) {
      form.preventDefault();
      const request = {
        name: this.name,
        idade: this.age,
        dog: this.dog,
        price: this.price,
      };
      const hospedagemService = new HospedagemService();
      hospedagemService.createHospedagem(request, (err, sucess) => {
        if (sucess) {
          console.log(sucess);
          const { account } = sucess;
          this.mensagem = `Oii ${account.name} ! Sua diaria é ${account.price} para o ${this.dog}`;
          this.atualizarListaHospedagem();
          this.limparCampos();
        }
        if (err) {
          console.log(err);
        }
      });
    },
    limparCampos() {
      this.name = "";
      this.age = 0;
      this.dog = "";
      this.price = 0;
    },
    async init() {
      this.atualizarListaHospedagem();
    },

    async atualizarListaHospedagem() {
      const hospedagemService = new HospedagemService();
      hospedagemService.getHospedagem((err, sucess) => {
        if (sucess) {
          console.log(sucess);
          this.hospedagens = sucess;
        }
        if (err) {
          console.log(err);
          this.mensagem = `Erro ao trazer as contas. Tente novamente mais tarde ! ${this.mensagem}`;
        }
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
