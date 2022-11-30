<script setup>
import { computed, reactive, ref, watch } from 'vue';

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  console.log({ oldQuestion, newQuestion })
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

const x = ref(0)
const y = ref(0)
const sumXY = computed(() => x.value + y.value)


// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// computed
watch(sumXY, (newSum, oldSum) => {
  console.log({ oldSum, newSum })
})

// array of multiple sources
watch([x, y], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})


const obj = reactive({ count: 0, count2: 0, subCount: { count3: 0 } })
// watch(
//   [() => obj.count, () => obj.count2],
//   ([count, count2]) => {
//     console.log(`count is: ${count}`)
//     console.log(`count2 is: ${count2}`)
//   }
// )
// watch(obj, (newValue, oldValue) => {
//   console.log({ oldValue: oldValue.count, newValue: newValue.count })
// })
watch(
  () => obj.subCount.count3,
  (newValue, oldValue) => {
    console.log({ oldValue: oldValue, newValue: newValue })
  }
)
</script>

<template>
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>

  <div>
    X: <input type="number" v-model="x" />
    Y: <input type="number" v-model="y" />
    <br />
    SUM is {{ sumXY }}
  </div>

  <div>
    Count 1: <input type="number" v-model="obj.count" /><br />
    Count 2: <input type="number" v-model="obj.count2" /><br />
    Count 3: <input type="number" v-model="obj.subCount.count3" /><br />
  </div>
</template>