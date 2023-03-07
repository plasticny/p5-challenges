#include <iostream>

using namespace std;

int main(){
    int x = 1;
    int y = 7;
    for(; x <= 3; x++){
        y = x + 3;
        for(; x <= y; y--);
    }
    cout << y;
}