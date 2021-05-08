let a = +prompt('Введите валидное число');
if (!isNaN(a)) {
    let b = +prompt('Введите валидное число');
    if (!isNaN(b)) {
        console.log(`Ответ: ${a + b}, ${a / b}`);
    } else {
        console.log("Некорректный ввод!");
    }
}else{
    console.log("Некорректный ввод!");
}

