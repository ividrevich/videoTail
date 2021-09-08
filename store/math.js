// ~/store/math.js

export const state = () => ({
  courses: [],
  lessons: []
})


export const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses
  },
  SET_LESSONS(state, lessons) {
    state.lessons = lessons
  }
}


export const actions = {
  async loadCourses(context) {
    const res = await this.$axios.$get('/api/math/course_list')
    context.commit('SET_COURSES', res)
  },
  async loadLessons(context) {
    const res = await this.$axios.$get('/api/math/lesson_list')
    context.commit('SET_LESSONS', res)
  }
}


export const getters = {
  courses(state) {
    return state.courses
  },
  lessons(state) {
    return state.lessons
  }
}
