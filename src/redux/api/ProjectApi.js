const baseURL = "https://demoapi.primusplug.io"

const projectApi = {
  addTask: async (body) => {
    const response = await fetch(`${baseURL}/v1/tasks`, {
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
        task: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        task: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      task: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  getTasks: async (token) => {
    const response = await fetch(`${baseURL}/v1/tasks`, {
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
        tasks: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        tasks: [],
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      tasks: [],
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  getTaskWithID: async (body) => {
    const response = await fetch(`${baseURL}/v1/tasks/${body.taskId}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`
      },
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        task: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        tasks: [],
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      tasks: [],
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  updateTask: async (body) => {
    const response = await fetch(`${baseURL}/v1/tasks/${body.taskId}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`
      },
      body: JSON.stringify(body.params)
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        task: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        task: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      task: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  deleteTask: async (body) => {
    const response = await fetch(`${baseURL}/v1/tasks/${body.taskId}`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`
      },
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        task: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        task: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      task: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },



  addApplication: async (body) => {
    const response = await fetch(`${baseURL}/v1/task/${body.taskId}/applications`, {
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
        application: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        task: {},
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      task: {},
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  getApplicationsPerTask: async (body) => {
    const response = await fetch(`${baseURL}/v1/task/${body.taskId}/applications`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`
      },
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        applications: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        tasks: [],
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      tasks: [],
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

  getApplicationWithID: async (body) => {
    const response = await fetch(`${baseURL}/v1/applications/${body.applicationId}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`
      },
    })

    const data = await response.json();
    const { status } = response;
    if (status === 200) {
      return {
        task: data,
        status: 'successful', // 'loading', 'successful', 'failed'
        message: '',
      };
    }
    if (status === 401 || status === 403 || status === 500 || status === 400) {
      return {
        tasks: [],
        status: 'failed', // 'loading', 'successful', 'failed'
        message: data?.message,
      }
    }
    return {
      tasks: [],
      status: 'failed', // 'loading', 'successful', 'failed'
      message: 'Something Went Wrong',
    }
  },

}

export default projectApi;