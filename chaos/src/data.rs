use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};
use serde_json::{Value};

#[derive(Debug, Serialize, Deserialize)]
#[serde(untagged)]
enum Data {
    U32(u32),
    String,
}

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    // Calculate sums and return response
    let mut string_len = 0;
    let mut int_sum = 0;

    
    for val in request.data {
        println!("{:?}", val);
        if val.is_string() {
            let str_val = val.as_str().unwrap();
            string_len += str_val.len();
            
        } else if val.is_number(){
            int_sum += val.as_i64().unwrap();
        }
    }

    let response = DataResponse {
        string_len,
        int_sum,
    };

    (StatusCode::OK, Json(response))
}

#[derive(Serialize, Deserialize, Debug)]
pub struct DataRequest {
    data: Vec<Value>,
    
}

#[derive(Serialize)]
pub struct DataResponse {
    string_len: usize,
    int_sum: i64
}
