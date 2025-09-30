# install dependencies

npm install

# run the development server

npm run dev

# reproduce the bug

1. open the browser and go to http://localhost:5173/main/intro
   - The counter will show a value that's in sync with the loader from `main.tsx`
2. click the button and observe the console output of the SERVER
   - It will log "Loader called with counter $newValue"
3. Even though the loader was called, the counter on the page will still show the old value

4. (OPTIONAL) Remove the `shouldRevalidate` function from `main.tsx` and the bug will go away
