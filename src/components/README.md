# Fade Component Example

This component will fade in and out based on a boolean state prop.

## Description

The Fade component needs a prop called 'transfer' to manage its visibility state. The initial state value in the parent component should be set to false.

## Example

Define the state in your parent component:

```jsx

const [someState, setSomeState] = useState(false);
Create a button to toggle the state:


<button onClick={() => setSomeState(!someState)}>Change State</button>
Use the Fade component with the transfer prop:


<Fade transfer={someState}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
</Fade>
```

With this setup, clicking the button will toggle the someState value between true and false, causing the Fade component to fade in and out accordingly.
