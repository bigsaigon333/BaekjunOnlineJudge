#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int MX = 9;
    int h[MX];
    int sum = 0;

    for (int i = 0; i < MX; i++)
    {
        cin >> h[i];
        sum += h[i];
    }

    sort(h, h + MX);

    for (int i = 0; i < MX; i++)
    {
        for (int j = i + 1; j < MX; j++)
        {
            if (sum - h[i] - h[j] == 100)
            {

                for (int k = 0; k < MX; i++)
                {
                    if (k == i || k == j)
                        continue;

                    cout << h[k] << "\n";
                }
                return 0;
            }
        }
    }

    return 0;
}