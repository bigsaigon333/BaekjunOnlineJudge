#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int d['z' - 'a' + 1];
    fill(d, d + ('z' - 'a' + 1), 0);

    string S;
    cin >> S;

    for (int i = 0; i < S.size(); i++)
        d[S[i] - 'a']++;

    for (int i = 0; i < 'z' - 'a' + 1; i++)
        cout << d[i] << " ";

    return 0;
}