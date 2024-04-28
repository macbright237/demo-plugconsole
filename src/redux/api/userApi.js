const baseURL = "https://democonsole.primusplug.io"

const userApi = {
  registerEngineer: async (body) => {
    const response = await fetch(`${baseURL}/v1/auth/register/`, {
      method: 'POST',
      // credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    const data = await response.json();
    const { status } = response;
    if (status === 201) {
      return {
        user: data.user,
        token: data.accessToken,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        user: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      user: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },


  registerClient: async (body) => {
    const response = await fetch(`${baseURL}/v1/auth/register/client`, {
      method: 'POST',
      // credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    const data = await response.json();
    const { status } = response;
    if (status === 201) {
      return {
        user: data.user,
        token: data.accessToken,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        user: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      user: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  login: async (body) => {
    const response = await fetch(`${baseURL}/v1/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    const data = await response.json();
    const { status } = response;
    if (status === 201) {
      return {
        currentUser: data.user,
        token: data.accessToken,
        status: 'successful', // 'loading', 'successful', 'failed'
        login: true, // true if logged in
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        currentUser: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        login: false, // true if logged in
        message: data?.message,
      }
    }
    return {
      currentUser: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      login: false, // true if logged in
      message: 'Something Went Wrong',
    }
  },




  getMyData: async (token) => {
    const response = await fetch(`${baseURL}/v1/auth/me`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },

    })
    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        currentUser: data,
        login: true,
        status: 'successful', // 'loading', 'successful', 'failed', // true if logged in
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 400) {
      return {
        currentUser: {},
        login: false,
        status: 'failed', // 'loading', 'successful', 'failed' // true if logged in
        message: '',
      }
    }

    return {
      currentUser: {},
      login: false,
      status: 'failed', // 'loading', 'successful', 'failed'
      message: '',
    }
  },



  engineerformation: async (body) => {
    const response = await fetch(`${baseURL}/v1/users/educations`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`
      },
      body: JSON.stringify(body.params)
    })

    const data = await response.json();
    const { status } = response;
    if (status === 201) {
      return {
        currentSchool: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        currentSchool: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      currentSchool: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },


  getformations: async (token) => {
    const response = await fetch(`${baseURL}/v1/users/educations`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        educations: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        educations: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      educations: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  getAllSkills: async () => {
    const response = await fetch(`${baseURL}/v1/skills`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        skills: data.data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        skills: [],
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }

    return {
      skills: [],
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },


  engineerExperience: async (body) => {
    const response = await fetch(`${baseURL}/v1/users/experienceS`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`
      },
      body: JSON.stringify(body.params)
    })

    const data = await response.json();
    const { status } = response;
    if (status === 201) {
      return {
        currentExperience: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        currentExperience: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      currentExperience: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },


  getExperiences: async (token) => {
    const response = await fetch(`${baseURL}/v1/users/experienceS`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        experiences: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        experiences: [],
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      experiences: [],
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },
}

export default userApi;