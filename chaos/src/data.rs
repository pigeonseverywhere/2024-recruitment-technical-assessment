use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};
use serde_json::{Value};

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    // Calculate sums and return response
    let mut string_len = 0;
    let mut int_sum = 0;

    for val in request.data {
        if val.is_string() {
            string_len += val.as_str().unwrap().len();
        } else if val.is_number() {
            int_sum += val.as_u64().unwrap();
        }

    }
    let response = DataResponse {
        string_len,
        int_sum
    };

    (StatusCode::OK, Json(response))
}

#[derive(Deserialize, Debug)]
pub struct DataRequest {
    data: Vec<Value>
}

#[derive(Serialize)]
pub struct DataResponse {
    string_len: usize,
    int_sum: u64
}
