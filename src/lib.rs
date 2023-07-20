use wasm_bindgen::prelude::wasm_bindgen;
use base64::{encode, decode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use std::io::Cursor;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {

    let base64_to_vector = decode(encoded_file).unwrap();

    let mut img = load_from_memory(&base64_to_vector).unwrap();

    img = img.grayscale();

    let mut buffer = Cursor::new(Vec::new());
    img.write_to(&mut buffer, Png).unwrap();

    let encoded_img = encode(&buffer.into_inner());
    let data_url = format!(
        "data:image/png;base64,{}",
        encoded_img
    );

    data_url
}
