// workshopService.js
const apiUrl = `${process.env.REACT_APP_API_URL}`;

export async function fetchClassesByWorkshopId(fk_id_oficina) {
  try {
    const response = await fetch(`${apiUrl}/classes/classesFromWorkshop/${fk_id_oficina}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar classes da oficina');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar classes da oficina:', error);
    throw error;
  }
}

// workshopService.js
export async function fetchTotalWorkshops() { //retorna a quantidade total de oficinas
  try {
    const response = await fetch(`${apiUrl}/workshops/total`);
    if (!response.ok) {
      throw new Error('Erro ao buscar total de oficinas');
    }
    const data = await response.text(); // Use response.text() para obter o texto da resposta
    return parseInt(data, 10); // Converta o texto para um número inteiro
  } catch (error) {
    console.error('Erro ao buscar total de oficinas:', error);
    throw error;
  }
}

export async function fetchOficinas() {
  try {
      // Faz uma requisição GET para a API
      const response = await fetch(`${apiUrl}/workshops`);
      // Extrai os dados da resposta como JSON
      const data = await response.json();
      // Retorna os dados obtidos
      return data;
  } catch (error) {
      // Em caso de erro, exibe uma mensagem de erro no console
      console.error('An error occurred while fetching data from the API:', error);
      // Lança o erro para ser tratado pela função chamadora
      throw error;
  }
}

export async function fetchWorkshopById(id_oficina) {
  try {
      const response = await fetch(`${apiUrl}/workshops/getById/${id_oficina}`);
      if (!response.ok) {
          throw new Error('Erro ao buscar oficina');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Erro ao buscar oficina:', error);
      throw error;
  }
}

export async function deleteWorkshop(id_oficina) {
  try {
      const response1 = await fetch(`${apiUrl}/lesson/delete/${id_oficina}`, {
          method: 'DELETE'
      });
      if (!response1.ok ) {
        throw new Error('Erro ao deletar aulas');
    } 
      const response2 = await fetch(`${apiUrl}/registerClasses/delete/${id_oficina}`, {
          method: 'DELETE'
      });
      if (!response2.ok) {
          throw new Error('Erro ao deletar matriculas');
    }
      const response3 = await fetch(`${apiUrl}/classTeacher/delete/${id_oficina}`, {
          method: 'DELETE'
      });
      if (!response3.ok) {
          throw new Error('Erro ao deletar professores');
      }

      const response4 = await fetch(`${apiUrl}/classes/delete/${id_oficina}`, {
            method: 'DELETE'
      });
      if (!response4.ok) {
          throw new Error('Erro ao deletar classes');
      }
      const response5 = await fetch(`${apiUrl}/workshops/delete/${id_oficina}`, {
        method: 'DELETE'
    });
      if (!response5.ok) {
          throw new Error('Erro ao deletar oficina');
      }
  } catch (error) {
      console.error('Erro ao deletar oficina:', error);
      throw error;
  }
}

