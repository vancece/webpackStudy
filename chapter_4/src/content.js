export default function say() {
    const a = {a: 'a', b: 'b'};
    const b = {a: a, b: 'c'};
    console.log(b);
    document.write(JSON.stringify(b));
    document.write('</br>');
}