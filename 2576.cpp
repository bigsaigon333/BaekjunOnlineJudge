#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int sum = 0;
    int min = INT_MAX;
    for (int i = 0; i < 7; i++)
    {
        int tmp;
        cin >> tmp;

        if (tmp % 2 == 1)
        {
            sum += tmp;
            if (min > tmp)
                min = tmp;
        }
    }

    if (sum == 0)
    {
        cout << -1;
    }
    else
    {
        cout << sum << "\n"
             << min;
    }

    return 0;
}