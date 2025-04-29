#include<iostream>
using namespace std;
class A{
    public:
    A(){
        cout<<"1"<<endl;
    }
};
class B{
    public:
    B(){
        cout<<"hello"<<endl;
    }
};
class C:public A,public B{
public :
C(){
    cout <<"3"<<endl;
}
};
int main(){
    C.obj;
    return 0;
}
