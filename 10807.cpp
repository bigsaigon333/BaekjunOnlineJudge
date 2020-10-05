#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;

    int MAX = 100;
    int num[MAX];
    fill(num, num + MAX, 0);

    for (int i = 0, tmp = 0; cin >> tmp; i++)
        num[i] = tmp;

    int v;
    cin >> v;

    int count = 0;
    for (int i = 0; i < N; i++)
        if (num[i] == v)
            count++;

    cout << count << "\n";

    return 0;
}