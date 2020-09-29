#include <bits/stdc++.h>
using namespace std;

int main()
{
    cin.tie(0);
    ios::sync_with_stdio(0);

    int cards[21];

    for (int i = 1; i <= 20; i++)
    {
        cards[i] = i;
    }

    int st, en;
    while (cin >> st >> en)
    {
        while (st < en)
        {
            swap(cards[st++], cards[en--]);
        }
    }

    for (int i = 1; i <= 20; i++)
        cout << cards[i] << " ";

    return 0;
}