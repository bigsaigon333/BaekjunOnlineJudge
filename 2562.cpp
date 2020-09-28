#include <bits/stdc++.h>
using namespace std;

int main()
{
  ios::sync_with_stdio(0);
  cin.tie(0);

  int max = INT_MIN;
  int idx = -1;
  for (int i = 0;; i++)
  {
    int temp;
    if (!(cin >> temp))
      break;

    if (temp > max)
    {
      max = temp;
      idx = i + 1;
    }
  }

  cout << max << "\n"
       << idx;

  return 0;
}