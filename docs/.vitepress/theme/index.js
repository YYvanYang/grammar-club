import DefaultTheme from 'vitepress/theme'
import Card from './components/Card.vue'
import Note from './components/Note.vue'
import Quote from './components/Quote.vue'
import Tense from './components/Tense.vue'
import Test from './components/Test.vue'
import './styles/index.styl'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Card', Card)
    app.component('Note', Note)
    app.component('Quote', Quote)
    app.component('Tense', Tense)
    app.component('Test', Test)
  }
}