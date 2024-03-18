
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js';
const supabaseUrl = 'https://yryrzmcfkwklywykoevq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyeXJ6bWNma3drbHl3eWtvZXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MjMxOTUsImV4cCI6MjAyNjI5OTE5NX0.EUo0LxitPyAIL60ZWgNl4J69gSYsQCTXq-U5yrvoBbQ'
const supabase = createClient(supabaseUrl, supabaseKey)


console.log("here");

let { data: books, error } = await supabase
  .from('books')
  .select('*')


for (book in books){
    let bookList = document.getElementById('books')
    bookList.innerHTML += `<li>${book.title}</li>`
}