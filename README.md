# tuo-modal

modal with fullpage background (react)

## Screenshot

![fade-modal](https://github.com/tuo-dev/tuo-modal/assets/137742986/efcb5404-cb90-4a1e-ab65-da9d87f0ee8e)

## Development

```
npm install
yarn install

npm run dev
yarn dev
```

## Install

```
npm install tuo-modal
yarn add tuo-modal
```

## Usage

```jsx
const [open, setOpen] = useState<boolean>(false);

//ex btn
<button type="button" onClick={() => setOpen(true)}>
<TuoFadeModal open={open} onClose={() => setOpen(false)}>
  ...JSX.Element (content inside the modal)
</TuoFadeModal>
```

## API

### TuoFadeModal props

| name | description | type | defalut | 
| --- | --- | --- | --- |
| className | additional css class modal without background | stiring | |
| width | width of modal | number / 'auto' | 300 |
| height | height of modal | number / 'auto' | 400 |
| modalColor | background-color of modal | string | '#fff' |
| modalRadius | border-radius of modal  | number | 10 |
| modalPadding | padding of modal | number | 10 |
| backgroundColor | background-color of background | string | '#0003' |
| clickBackgroundClose | onclose when clicked background | boolean | true |
| closeBtn | close button | boolean | true |
| closeBtnColor | color of close button | string | '#333' |
| open | open modal | boolean | |
| onClose | close function of modal | () => void | |
| closeAnimationEnd | function after close animation is complete | () => void | |
