// Configuração da API
export const API_CONFIG = {
  BASE_URL: 'https://watergame.gabrieltomazini.com/api/v1',
  
  // Endpoints existentes
  ENDPOINTS: {
    DEVICES: '/devices/',
    CONSUMO_DIARIO: '/consumo-diario/',
    CONSUMO_DETALHADO: (id) => `/consumo-diario/${id}/detalhado`
  },
  
  // Novos endpoints para autenticação (quando implementados)
  AUTH_ENDPOINTS: {
    VALIDATE_ACCESS_CODE: '/auth/validate-access-code',
    GET_USER_DATA: '/auth/user-data'
  }
}

// Função para validar código de acesso
export async function validateAccessCode(code) {
  try {
    // Por enquanto, validação local baseada em padrão
    const codePattern = /^[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}$/i
    
    if (!codePattern.test(code)) {
      return { valid: false, message: 'Formato de código inválido' }
    }
    
    // TODO: Implementar chamada real para API quando estiver pronta
    // const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.AUTH_ENDPOINTS.VALIDATE_ACCESS_CODE}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ accessCode: code })
    // })
    // 
    // if (!response.ok) {
    //   throw new Error('Erro na validação')
    // }
    // 
    // const result = await response.json()
    // return result
    
    // Por enquanto, aceita códigos que seguem o padrão
    return { valid: true, message: 'Código válido' }
    
  } catch (error) {
    console.error('Erro na validação do código:', error)
    return { valid: false, message: 'Erro ao validar código' }
  }
}

// Função para obter dados do usuário baseado no código
export async function getUserData(accessCode) {
  try {
    // TODO: Implementar chamada real para API quando estiver pronta
    // const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.AUTH_ENDPOINTS.GET_USER_DATA}`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${accessCode}`,
    //     'Content-Type': 'application/json',
    //   }
    // })
    // 
    // if (!response.ok) {
    //   throw new Error('Erro ao obter dados do usuário')
    // }
    // 
    // const userData = await response.json()
    // return userData
    
    // Por enquanto, retorna dados mockados
    return {
      userId: accessCode,
      userName: 'Usuário',
      devices: [],
      permissions: ['dashboard', 'home']
    }
    
  } catch (error) {
    console.error('Erro ao obter dados do usuário:', error)
    return null
  }
}
